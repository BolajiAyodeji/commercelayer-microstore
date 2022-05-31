import {
  SkuField,
  AvailabilityContainer,
  ItemContainer,
  PricesContainer,
  Price,
  AvailabilityTemplate,
} from "@commercelayer/react-components"

import { AddToCardButton } from "./AddToCartButton"
import { DiscountBadge } from "./DiscountBadge"
import {
  Card,
  CardBody,
  CardDesc,
  CardDivider,
  CardFooter,
  CardImage,
  CardPrice,
  CardPriceWrapper,
  CardStock,
  CardTitle,
  Thumb,
} from "./styled"

export const Product = () => {
  return (
    <>
      <Card>
        <CardImage>
          <Thumb attribute="image_url" tagElement="img" />
          <DiscountBadge />
        </CardImage>
        <CardBody>
          <CardTitle>
            <SkuField attribute="name" tagElement="p" />
          </CardTitle>
          <CardDesc>
            <SkuField attribute="description" tagElement="p" />
          </CardDesc>
          <CardFooter>
            <CardPrice>
              <CardPriceWrapper>
                <Price
                  className="text-xl font-bold"
                  compareClassName="text-gray-400 line-through mr-2"
                />
              </CardPriceWrapper>
              <AddToCardButton />
            </CardPrice>
            <AvailabilityTemplate>
              {({ quantity, text }) => {
                return (
                  <CardStock>
                    <span
                      className={`block w-2 h-2  ${
                        quantity === 0 ? "bg-red-400" : "bg-green-400"
                      } rounded-full`}
                    />
                    {text}
                  </CardStock>
                )
              }}
            </AvailabilityTemplate>
          </CardFooter>
        </CardBody>
      </Card>
      <CardDivider />
    </>
  )
}
