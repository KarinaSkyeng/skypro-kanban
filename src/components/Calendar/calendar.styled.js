import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const CalendarContent  = styled.div`
margin-bottom: 12px;
margin-left: 30px;
`;

export const CalendarTtl = styled.p`
  // margin-bottom: 14px;
  padding: 0 7px;

  color: ${({theme})=> theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StyledDayPicker = styled(DayPicker)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  margin: 0 0px;
  padding: 0 10px;

  background-color: #ffffff;
  color: #94A6BE;

  .rdp {
    margin: 0em;
  }
.rdp-table {
  width: 168px;

}
  .rdp-caption_label {

    color: #94A6BE;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
  }
  .rdp-head_cell {
    font-size: 10px;
  }
  .rdp-cell{
    width: 22px;
    height: 22px;
    margin: 4px;
    border-radius: 30%;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: #94A6BE;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;
  }
  .rdp-button_reset.rdp-button.rdp-day {
    width: 16px;
    height: 16px;
    font-size: 10px;   
  }
  .rdp-nav_icon {
    Width: 14px;
    Height: 6px;
  }
  p {
    margin-top: 14px;
    width: 100%;
    height: 22px;
    font-size: 10px;
  }
`

export const CalendarContentP  = styled.p`
margin-left: 20px;
`;

// export const CalendarDaysNames  = styled.div`
// display: flex;
// flex-wrap: nowrap;
// align-items: center;
// justify-content: space-between;
// margin: 7px 0;
// padding: 0 7px;
// `;

// export const CalendarDaysName  = styled.div`
// color: #94A6BE;
//   font-size: 10px;
//   font-weight: 500;
//   line-height: normal;
//   letter-spacing: -0.2px;
// `;

// export const СalendarСells = styled.div`
// width: 182px;
// height: 126px;
// display: flex;
// flex-wrap: wrap;
// `;

// export const СalendarСell = styled.div`
// width: 22px;
//   height: 22px;
//   margin: 2px;
//   border-radius: 50%;
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   justify-content: center;
//   color: #94A6BE;
//   font-size: 10px;
//   line-height: 1;
//   letter-spacing: -0.2px;
//   cursor: pointer;
// `;