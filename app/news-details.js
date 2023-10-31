import { Heading, Text, Center,Image,Divider } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";
// import { Image } from "expo-image";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <Header title={"News"} withBack={true} />
      <Center flex={1} padding={"$4"}>      
        <Heading>News Detail</Heading>
        <Image width="$full"  height={187} marginTop={250} borderRadius="$none" 
         source={{uri: params.image,
        }}
       />
        <Text paddingRight={200} fontWeight="$bold" paddingVertical={9}>{params.date}</Text>
        <Text textAlign="justify" paddingRight={30} fontWeight="$extrabold" fontSize={20}>{params.title}</Text>
        <Divider marginVertical={10}/>
        <Text textAlign="justify">{params.content}</Text>
      </Center>
    </>
  );
};

export default NewsDetail;