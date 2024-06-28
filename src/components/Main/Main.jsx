import { Container } from "../../glogalStyle.styled.js";
import { Column } from "../Column/Column.jsx";
import { statusList } from "../data.js";
import * as S from "./main.styled.js"

export const Main = ({ cards }) => {
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status, i) => (
              <Column
                key={i}
                title={status}
                cards={cards.filter((card) => card.status === status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
};
