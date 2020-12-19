import React from 'react'
import { 
    ProductHeadline, 
    CreateAccountContainer, 
    CreateAccountText, 
    PhoneMockupThree, 
    PhoneMockupFour, 
    ExploreVarietiesContainer, 
    ExploreVarietiesText, 
    CheckoutContainer, 
    CheckoutText,
    PhoneMockupFive 
} from './ProductElements'

const ProductOverview = () => {
    return (
        <div>
            <ProductHeadline>
                <h1>How the app works</h1>
            </ProductHeadline>
            
            <CreateAccountContainer>
                <PhoneMockupThree />
                <CreateAccountText>
                    <h3>
                        Create an account
                    </h3>
                    <h2>
                        Create/login to an existing account to get started
                    </h2>
                    <h4>
                        An account is created with your email and a desired password
                    </h4>
                </CreateAccountText>
            </CreateAccountContainer>

            <ExploreVarietiesContainer>
                <ExploreVarietiesText>
                    <h3>
                        Explore varieties
                    </h3>
                    <h2>
                        Shop for your favorites meal as e dey hot.
                    </h2>
                    <h4>
                        Shop for your favorite meals or drinks and enjoy while doing it.
                    </h4>
                </ExploreVarietiesText>
                <PhoneMockupFour />
            </ExploreVarietiesContainer>

            <CheckoutContainer>
                <PhoneMockupFive />
                <CheckoutText>
                    <h3>
                        Checkout
                    </h3>
                    <h2>
                        When you done check out and get it delivered.
                    </h2>
                    <h4>
                        When you done check out and get it delivered with ease.
                    </h4>
                </CheckoutText>
            </CheckoutContainer>
        </div>
    )
}

export default ProductOverview