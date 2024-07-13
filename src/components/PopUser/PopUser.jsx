// import { Link, useNavigate } from "react-router-dom";
// import { routes } from "../../router/routes";
// import * as S from "./popUser.styled.js";

// export const PopUser = ({setUser}) => {
//     const nav = useNavigate()
// 	const handleLogout = () => {
// 		setUser(false)
// 		nav(routes.login)
// 	}
// 	return (
//         <S.PopExit>
// 				<S.PopExitContainer>
// 					<S.PopExitBlock>
// 						{/* <S.PopExitTitle>
// 							<h2>Выйти из аккаунта?</h2>
// 						</S.PopExitTitle> */}
// 						<S.PopExitForm id="formExit" action="#">
// 							<S.PopExitFormGroup>
// 								<S.PopExitYes onClick={handleLogout}><a>Да, выйти</a> </S.PopExitYes>
// 								<S.PopExitNo><Link to={routes.main}>Нет, остаться</Link> </S.PopExitNo>
// 							</S.PopExitFormGroup>
// 						</S.PopExitForm>
// 					</S.PopExitBlock>
// 				</S.PopExitContainer>
// 			</S.PopExit>
//     );
// }