'use client'
import { Box, Flex, useColorModeValue as mode, chakra } from '@chakra-ui/react'
import Sidebar from './_components/Sidebar'
import Image from 'next/image'

import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

// import { Metadata } from 'next'

const ITEM_WIDTH = 272 // px
const ITEM_HEIGHT = 200 // px

type GridItem = {
  id: string
  name: string
  descr: string
  thumb: string
}

const gridItems: GridItem[] = [
  {
    id: '1',
    name: 'Figma',
    descr: 'See your designes',
    thumb: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
  },
  {
    id: '2',
    name: 'GitHub',
    descr: 'Read your code',
    thumb:
      'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
  },
  {
    id: '3',
    name: 'Atlassian',
    descr: 'Rule your tickets',
    thumb: 'https://svgur.com/i/wb6.svg'
  },
  {
    id: '4',
    name: 'Figma',
    descr: 'See your designes',
    thumb: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
  },
  {
    id: '5',
    name: 'Figma',
    descr: 'See your designes',
    thumb: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
  },
  {
    id: '6',
    name: 'Figma',
    descr: 'See your designes',
    thumb: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
  },
  {
    id: '7',
    name: 'Figma',
    descr: 'See your designes',
    thumb: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
  },
  {
    id: '8',
    name: 'Figma',
    descr: 'See your designes',
    thumb: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
  }
]

const SweetGrid = chakra(Box, {
  baseStyle: {
    padding: `10px`,
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${ITEM_WIDTH}px, 1fr))`,
    columnGap: `24px`,
    rowGap: `24px`,
    maxHeight: `100%`,
    overflowY: `auto`
  }
})

const SweetItem = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: `column`,
    rowGap: `5px`,
    padding: `24px`,
    // border: '2px solid green',
    borderRadius: 8,
    minHeight: `${ITEM_HEIGHT}px`,
    height: `${ITEM_HEIGHT}px`,
    minWidth: `${ITEM_WIDTH}px`,
    background: `#FFF`,
    boxShadow: `0px 4px 8px 0px rgba(48, 49, 51, 0.10), 0px 0px 1px 0px rgba(48, 49, 51, 0.05)`
  }
})

const SweetTitle = chakra(Box, {
  baseStyle: {
    color: `#272727`,

    fontSize: `20px`,
    fontStyle: `normal`,
    fontWeight: `bold`,
    lineHeight: `normal`
  }
})

const SweetDescr = chakra(Box, {
  baseStyle: {
    color: `#6F6B6B`,
    fontSize: `14px`,
    fontStyle: `normal`,
    fontWeight: `400`
  }
})

const SweetImageArea = chakra(Box, {
  baseStyle: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const SweetImageBox = chakra(Box, {
  baseStyle: {
    position: `relative`,
    width: `80px`,
    height: `80px`
  }
})

const App = () => {
  return (
    <Box
      height="100vh"
      overflow="hidden"
      position="relative"
      className={inter.className}
    >
      <Flex h="full" id="app-container">
        <Sidebar />
        <Box bg={mode('#fafafa', 'gray.800')} flex="1" p="6">
          <Box
            w="full"
            h="full"
            rounded="lg"
            border="3px dashed currentColor"
            color={mode('gray.200', 'gray.700')}
          >
            <SweetGrid>
              {gridItems.map((item) => {
                return (
                  <SweetItem key={item.id}>
                    <SweetTitle>{item.name}</SweetTitle>
                    <SweetDescr>{item.descr}</SweetDescr>
                    <SweetImageArea>
                      <SweetImageBox>
                        <Image
                          alt="logo"
                          src={item.thumb}
                          fill
                          priority
                          sizes={` `}
                        />
                      </SweetImageBox>
                    </SweetImageArea>
                  </SweetItem>
                )
              })}
            </SweetGrid>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default App
