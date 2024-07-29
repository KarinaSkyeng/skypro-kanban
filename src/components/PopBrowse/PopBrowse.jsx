import { Link, useParams, useState } from "react-router-dom";
import Calendar from "../../components/Calendar/Calendar.jsx";
import { routes } from "../../router/routes.js";
import * as S from "./popBrowse.styled";
import { Subttl, Orange } from "../../glogalStyle.styled";
    
export const PopBrowse = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const closeModal = () => {
		setIsModalOpen(false);
};
	const { id } = useParams();
    return (
        <S.PopBrowse>
				<S.PopBrowseContainer>
					<S.PopBrowseBlock>
						<S.PopBrowseContent>
							<S.PopBrowseTopBlock>
								<S.PopBrowseTtl>Название задачи {id}</S.PopBrowseTtl>
								<S.BrowseCategoriesTheme>
									<Orange>Web Design</Orange>
								</S.BrowseCategoriesTheme>
							</S.PopBrowseTopBlock>
							<S.PopBrowseStatus>
								<S.BrowseStatusP>Статус</S.BrowseStatusP>
								<S.BrowseStatusThemes>
									<S.BrowseStatusThemeHide>
										<p>Без статуса</p>
									</S.BrowseStatusThemeHide>
									<S.BrowseStatusThemeGray>
										<p className="_gray">Нужно сделать</p>
									</S.BrowseStatusThemeGray>
									<S.BrowseStatusThemeHide>
										<p>В работе</p>
									</S.BrowseStatusThemeHide>
									<S.BrowseStatusThemeHide>
										<p>Тестирование</p>
									</S.BrowseStatusThemeHide>
									<S.BrowseStatusThemeHide>
										<p>Готово</p>
									</S.BrowseStatusThemeHide>
								</S.BrowseStatusThemes>
							</S.PopBrowseStatus>
							<S.PopBrowseWrap>
								<S.PopBrowseForm id="formBrowseCard" action="#">									
									<S.FormBrowseBlock>
										<Subttl>Описание задачи</Subttl>
										<S.FormBrowseArea name="text" id="textArea01"  readOnly placeholder="Введите описание задачи..."></S.FormBrowseArea>
									</S.FormBrowseBlock>
								</S.PopBrowseForm>
								<Calendar />
							</S.PopBrowseWrap>
							<S.ThemeDownCategories>
								<S.BrowseCategoriesP>Категория</S.BrowseCategoriesP>
								<S.CategoriesTheme>
									<Orange>Web Design</Orange>
								</S.CategoriesTheme>
							</S.ThemeDownCategories>
							<S.PopBrowseBtnBrowse>
								<S.BtnGroup>
									<S.PopBrowseBtnEditBtnBor><a href="#">Редактировать задачу</a></S.PopBrowseBtnEditBtnBor>
									<S.BtnBrowseDeleteBtnBor><a href="#">Удалить задачу</a></S.BtnBrowseDeleteBtnBor>
								</S.BtnGroup>
								<S.BtnBrowseCloseBtnBg><Link to={routes.main}>Закрыть</Link></S.BtnBrowseCloseBtnBg>
							</S.PopBrowseBtnBrowse>
							<S.PopBrowseBntEditHide>
								<S.BtnGroup>
									<S.BtnEditEditBtnBg><a href="#">Сохранить</a></S.BtnEditEditBtnBg>
									<S.PopBrowseBtnEditBtnBor><a href="#">Отменить</a></S.PopBrowseBtnEditBtnBor>
									<S.BtnBrowseDeleteBtnBor><a href="#">Удалить задачу</a></S.BtnBrowseDeleteBtnBor>
								</S.BtnGroup>
								<S.BtnBrowseCloseBtnBg onClick={closeModal} value={isModalOpen}>Закрыть</S.BtnBrowseCloseBtnBg>
							</S.PopBrowseBntEditHide>													
						</S.PopBrowseContent>
					</S.PopBrowseBlock>
				</S.PopBrowseContainer>
			</S.PopBrowse>
    );
}