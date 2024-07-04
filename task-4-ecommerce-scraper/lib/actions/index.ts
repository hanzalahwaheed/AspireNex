"use server";
import { scrapeAmazonProduct } from "@/lib/scraper";
import { connectToDB } from "../mongoose";

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    connectToDB();
    const scrapedProduct = await scrapeAmazonProduct(productUrl);
    if (scrapedProduct == null) return;
  } catch (error) {
    throw new Error(`Failed. Error:${error}`);
  }
}
