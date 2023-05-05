import { Box, SimpleGrid } from '@chakra-ui/react';
import PropertyCard from '@myapp/features/common/modules/PropertyCard';
import DefaultLayout from '@myapp/features/layouts/DefaultLayout';
import React from 'react'

const index = ({ properties }) => {
  return (
    <DefaultLayout>
        <Box backgroundColor="#f7f8f9" padding="3rem">
            <Box maxWidth="1280px" margin="0 auto">
                <SimpleGrid 
                    columns={{ base:"1", sm: "3" }} 
                    gap={{base: "0", sm:"2rem"}}
                >
                    {properties.map((property) => (
                        <PropertyCard key={property.id} {...property} />
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    </DefaultLayout>
  )
}

export default index

export async function getStaticProps(){
    const { hits } = require("@myapp/features/data/properties");
    return {
      props: { properties: hits }
    }
  }