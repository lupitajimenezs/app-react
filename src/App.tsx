import Card, {CardBody} from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function app(){
   const [isLoading, setIsLoading] = useState(false);
   const handleClick = () => setIsLoading(!isLoading);

   const list = ["MARIA", "2"]
   const handleSelect = (elemento: string)=>{
      console.log("imprimiendo", elemento)
   }
   const contenido = () => list.length !== 0 && (
      <List data={list} onSelect={handleSelect}></List>
   );
   
   return <Card>
      <CardBody title="hola" text="jkdsjdsjksjksfjk"></CardBody>
      {contenido()} 
      <Button isLoading={isLoading} onClick={handleClick}>
         HOLA MUNDO
      </Button>
   </Card>;
}

export default app;