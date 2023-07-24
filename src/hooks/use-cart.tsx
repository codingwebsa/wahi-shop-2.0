import { BookDataType } from "~/types"
import { toast } from "react-hot-toast"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface CartStore {
  items: BookDataType[]
  addItem: (data: BookDataType) => void
  removeItem: (id: string) => void
  removeAll: () => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: BookDataType) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
          return toast("Item already in cart.")
        }

        set({ items: [...get().items, data] })
        toast.success("Item added to cart.")
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] })
        toast.success("Item removed from cart.")
      },
      removeAll: () => set({ items: [] }),
      isOpen: false,
      setIsOpen: (isOpen: boolean) => set({ isOpen }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useCart
