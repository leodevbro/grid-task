'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme'
import { ReactElement } from 'react'
import { SWRConfig } from 'swr'

const Providers = ({ children }: { children: ReactElement }) => {
  return (
    <CacheProvider>
      <ChakraProvider
        theme={extendTheme(theme, {
          styles: {
            global: { html: { maxHeight: `100vh`, overflowY: `hidden` } }
          }
        })}
      >
        <SWRConfig value={{ revalidateOnFocus: false }}>{children}</SWRConfig>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default Providers
