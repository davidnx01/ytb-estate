import HeroBanner from "@myapp/features/Home/components/HeroBanner";
import FeaturedProperties from "@myapp/features/Home/components/HeroBanner/FeaturedProperties";
import MeetTheTeam from "@myapp/features/Home/components/MeetTheTeam";
import Partners from "@myapp/features/Home/components/Partners";
import Testimonials from "@myapp/features/Home/components/Testimonials";
import DefaultLayout from "@myapp/features/layouts/DefaultLayout";


export default function Home({ featuredProperties }) {
  console.log(featuredProperties)
  return (
    <>
      <DefaultLayout>
        <HeroBanner />
        <FeaturedProperties featuredProperties={featuredProperties} />
        <MeetTheTeam />
        <Partners />
        <Testimonials></Testimonials>
      </DefaultLayout>
    </>
  )
}

export async function getStaticProps(){
  const { hits } = require("@myapp/features/data/properties");
  return {
    props: { featuredProperties: hits.slice(0, 5) }
  }
}