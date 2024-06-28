import styled from "styled-components";

export const CalendarContent  = styled.div`
margin-bottom: 12px;
margin-left: 30px;
`;

export const CalendarContentP  = styled.p`
margin-left: 20px;
`;

export const CalendarDaysNames  = styled.div`
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: space-between;
margin: 7px 0;
padding: 0 7px;
`;

export const CalendarDaysName  = styled.div`
color: #94A6BE;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const СalendarСells = styled.div`
width: 182px;
height: 126px;
display: flex;
flex-wrap: wrap;
`;

export const СalendarСell = styled.div`
width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
`;