import { Column } from "../Column/Column.jsx";
import { statusList } from "../data.js";
import * as S from "./main.styled.js";

export const Main = ({cards}) => {
	
    return (
        <S.Main>
			<div className="container">
				
				<div className="main__block">
					<div className="main__content">
						{statusList.map((status, i) => (
							<Column
							key={i} 
							title={status} 
							cards={cards.filter((card) => card.status === status)}
						/>
						))}					
									
					</div>
				
				</div>
			</div>
		</S.Main>
    );
}