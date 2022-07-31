import React from 'react'
import Content from '../components/content'
import  { Card, CardContent, CardImage }  from '../components/card';
import  Text from '../components/text';
import Flex from "../components/flex";
const Home = ()  => {

    return (
        <Content>
            <Flex css={{ flexWrap: 'wrap'}}>
                { [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item,index) => (
                    <Card key={index.toString()}>
                        <CardImage src="https://via.placeholder.com/216"/>
                        <CardContent>
                            <Text variant="h4" css={{ fontWeight: '700'}}>Bem vindo</Text>
                        </CardContent>
                    </Card>
                )) }
            </Flex>
        </Content>
    )
}
export default Home