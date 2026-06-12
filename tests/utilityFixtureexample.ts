import {test} from "../fixtures/baseFixtures";

test(

  "Utility Fixture Example",

  async ({ dateutil }) => {

   console.log(

     dateutil.getCurrentDate()
   )
 } 
);