"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { BookDataType } from "~/types"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import * as z from "zod"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Textarea } from "~/components/ui/textarea"

import Info from "./info"
import OrderSummary from "./order-summary"

const formSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.coerce.number(),
  emergencyPhone: z.coerce.number().optional(),
  email: z.string().email(),
  city: z.string(),
  subCity: z.string(),
  address: z.string(),
  extraInfo: z.string().optional(),
  paymentMethod: z.enum(["cod", "bkash", "rocket"], {
    required_error: "You need to select a payment method type.",
  }),
})

interface OrderFormProps {
  data: BookDataType
}

export default function OrderForm({ data }: OrderFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      city: "Rajshahi",
      paymentMethod: "cod",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    toast.success("Order placed!")
  }

  return (
    <div>
      <div className="px-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-8 md:grid-cols-2"
          >
            <div aria-label="form-side" className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      নাম <sup className="text-rose-600">*</sup>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        ফোন নাম্বার <sup className="text-rose-600">*</sup>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="emergencyPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>জরুরী ফোন (যদি থাকে)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Emergency phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      ইমেইল <sup className="text-rose-600">*</sup>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        জেলা <sup className="text-rose-600">*</sup>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Your city" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subCity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        এরিয়া/উপজেলা <sup className="text-rose-600">*</sup>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Area/Sub city" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      ঠিকানা <sup className="text-rose-600">*</sup>
                    </FormLabel>
                    <FormControl>
                      <Textarea rows={4} placeholder="" {...field} />
                    </FormControl>
                    <FormDescription>আপনার পূর্ণ ঠিকানা দিন</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="extraInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>অন্যান্য তথ্য</FormLabel>
                    <FormControl>
                      <Textarea rows={4} {...field} />
                    </FormControl>
                    <FormDescription>
                      অর্ডার বা পণ্য ডেলিভারি সংক্রান্ত আরো কোনো তথ্য থাকলে দিন
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <div>
                <Info data={data} />
                <OrderSummary data={data} />
              </div>
              <div className="p-3 mt-3 border">
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                className={cn(
                                  "",
                                  field.value == "cod" &&
                                    "bg-green-500 text-white border-green-500"
                                )}
                                value="cod"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              ক্যাশ অন ডেলিভারি
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 opacity-80">
                            <FormControl>
                              <RadioGroupItem
                                disabled
                                className={cn(
                                  "",
                                  field.value == "bkash" &&
                                    "bg-green-500 text-white border-green-500"
                                )}
                                value="bkash"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">বিকাশ</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 opacity-80">
                            <FormControl>
                              <RadioGroupItem
                                disabled
                                className={cn(
                                  "",
                                  field.value == "rocket" &&
                                    "bg-green-500 text-white border-green-500"
                                )}
                                value="rocket"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">রকেট</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button className="w-full mt-5" type="submit">
                Place Order
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
