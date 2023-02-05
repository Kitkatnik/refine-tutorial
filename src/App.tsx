import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ChakraProvider,
  refineTheme,
  ReadyPage,
  ErrorComponent,
  Layout,
} from "@pankod/refine-chakra-ui";
import { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";

import { ProductList } from "pages/products/list";


import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";

function App() {
  return (
    <ChakraProvider theme={refineTheme}>
      <Refine
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        notificationProvider={notificationProvider()}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        Layout={Layout}
        routerProvider={routerProvider}
        resources={[
                    {
                        name: "products",
                        list: ProductList,
                        show: ChakraUIInferencer,
                        create: ChakraUIInferencer,
                        edit: ChakraUIInferencer,
                    },
                ]}
      />
    </ChakraProvider>
  );
}

export default App;
