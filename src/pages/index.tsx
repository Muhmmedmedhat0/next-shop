import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { Products } from "../../Types/app-props.types";


const Slider = dynamic(() => import("../../components/home/slider"), {
  suspense: true,
});

const Categories = dynamic(() => import("../../components/home/categories"), {
  suspense: true,
});
const Productlist = dynamic(() => import("../../components/products/product-list"), {
  suspense: true,
});
const NewsLetter = dynamic(() => import("../../components/news-letter/news-letter"), {
  suspense: true,
});
const Footer = dynamic(() => import("../../components/footer/footer"), {
  suspense: true,
});

export default function Home({ products }: Products) {
  
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Slider />
        <Categories />
        <Productlist products={products} />
        <NewsLetter />
        <Footer />
      </main>
    </Suspense>
  );
}
// 1- getStaticProps
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }
    const products: Products = await response.json();
    if (!products) {
      throw new Error("Invalid response format: data not found");
    }
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};