import { Column } from "../Column";
import { tasks, statusList } from "../data.js";

export const Main = () => {
	
    return (
        <main className="main">
			<div className="container">
				
				<div className="main__block">
					<div className="main__content">
						{statusList.map((status, i) => (
							<Column
							key={i} 
							title={status} 
							cards={tasks.filter((card) => card.status === status)}
						/>
						))}					
									
					</div>
				
				</div>
			</div>
		</main>
    );
}