
// export default function MainPage() {
//     return (
//       <div>
//         <h1>Hello Page Main</h1>
//       </div>
//     );
//   }

  // import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
    title: 'Main Page',
    description: 'Un simple MainPage',
   };
   
   
   export default function MainPage() {
   
   
     return (
       <div className="flex flex-col items-center justify-center w-full h-full">
         <span>Productos en el MainPage</span>
         {/* <CartCounter value={ 20 } /> */}
         
       </div>
     );
   }