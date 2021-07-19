import React from "react"
import { Box as NBBox, Center, NativeBaseProvider } from "native-base"

function Box(props) {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <NBBox
          bg="primary.400"
          p={4}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {props.children}
        </NBBox>
      </Center>
    </NativeBaseProvider>

  )
}
export { Box }
