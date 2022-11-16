import React from "react";
import styles from "./genericlist.css";
import { noop } from "../../utils/js/noop";

interface IItem {
  id: string;
  text: React.ReactNode;
  onClick?: (id: string) => void;
  className?: string;
  As?: "a" | "li" | "button" | "div";
  href?: string;
  icon?: React.ReactNode;
}

interface GenericListProps {
  list: IItem[];
}

export function GenericList({ list }: GenericListProps) {
  return (
    <>
      {list.map(
        ({ As = "div", text, onClick = noop, className, id, href, icon }) => (
          <As
            className={className}
            onClick={() => onClick(id)}
            key={id}
            href={href}
          >
            {icon}
            {text}
          </As>
        )
      )}
    </>
  );
}

// Генерирует любые списки

// Применение

// const LIST = [
//   { As: "li" as const, text: "some" },
//   { As: "li" as const, text: "other some" },
//   { As: "li" as const, text: "some" },
// ].map(generateId);
//
// function AppComponent() {
//   const [list, setList] = React.useState(LIST);
//
//   const handleItemClick = (id: string) => {
//     setList(list.filter((item) => item.id !== id));
//   };
//
//   const handleAddElement = () => {
//     setList(
//         list.concat(
//             generateId({ text: generateRandomString(), As: "li" as const })
//         )
//     );
//   };
//
//   return (
//       <Layout>
//         <Header />
//         <Content>
//           <CardsList />
//           <button onClick={handleAddElement}>Add element</button>
//           <ul>
//             <GenericList
//                 list={list.map(
//                     merge({
//                       onClick: handleItemClick,
//                     })
//                 )}
//             />
//           </ul>
//         </Content>
//       </Layout>
//   );
// }
//
// export const App = hot(() => <AppComponent />);
