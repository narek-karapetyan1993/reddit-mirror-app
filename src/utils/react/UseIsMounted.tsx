import React from "react";

export function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  return [isMounted];
}

// Проверяет монирован ли элемент
// Можно использовать для проверки вместо if

// Применение

// interface IMyHooksProps {
//   title: string;
//   id?: string;
// }
//
// export function MyHooks({ title, id }: IMyHooksProps) {
//   const [isMounted] = useIsMounted();
//
//   React.useEffect(() => {
//     console.log("componentWillUpdate");
//   }, [isMounted]);
//
//   return (
//     <div>
//       {title} {id}
//     </div>
//   );
// }

// function AppComponent() {
//   const [isVisible, setIsVisible] = React.useState(true);
//   const [title, setTitle] = React.useState("");
//   // const [isVisible] = useIsMounted();
//
//   return (
//       <Layout>
//         <Header />
//         <Content>
//           <CardsList />
//           <button onClick={() => setIsVisible(!isVisible)}>Change me! </button>
//           <input type="text" onChange={getValue(setTitle)} />
//           {isVisible && <MyHooks title={title} id="11" />}
//         </Content>
//       </Layout>
//   );
// }
//
// export const App = hot(() => <AppComponent />);
