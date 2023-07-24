"use server"

import axios from "axios"

export async function increment(slug: string) {
  try {
    await axios.get(`https://admin-sa.vercel.app/api/inc-view?slug=${slug}`)
  } catch (error) {
    console.log(error)
  }
}
