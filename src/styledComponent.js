import styled, { css } from "styled-components";

export const MediaDiv = styled.div`
  margin: 0px auto;
  min-height: 100vh;
  width: 766px;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bgColor};
  @media screen and (max-width: 766px) {
    width: 100%;
  }
`;
export const HeaderDiv = styled.div`
  width: 768px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Black Han Sans", sans-serif;
  position: absolute;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleLogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  line-height: 1;
`;

export const TitleBig = styled.span`
  font-size: 30px;
`;

export const TitleSmall = styled.span`
  font-size: 25px;
`;

export const SubHeaderDiv = styled.div`
  margin: 15px;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const Main = styled.div`
  padding-top: 90px;
`;

export const SlogunSection = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SlogunBig = styled.span`
  font-size: 35px;
  font-family: "League Gothic", sans-serif;
`;

export const SlogunSmall = styled.span`
  margin: 3px;
  font-weight: bold;
  color: #5399f5;
`;
export const ListSection = styled.div`
  margin: 0px auto;
  margin-top: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const InputForm = styled.form`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;
  background-color: #5386f5;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ListTitleDiv = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;
  background-color: #5386f5;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ListDiv = styled.div`
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  margin: 0px auto;
  margin-top: 10px;
  width: 90%;
`;
export const CheckTitleDiv = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CheckDiv = styled.div`
  font-size: 17px;
  font-family: "Noto Sans KR", sans-serif;
  width: 70%;
  margin: 0px auto;
`;

export const TextDiv = styled.div`
  font-size: 17px;
  font-family: "Noto Sans KR", sans-serif;
  margin: 10px auto;
`;
export const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
`;

export const EachPostLi = styled.li`
  margin: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

export const PostLink = styled.span`
  margin-left: 5px;
`;
export const PostRepl = styled.div`
  font-family: "Courier New", Courier, monospace;
`;
export const PagingSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px auto;
  width: 150px;
  margin-top: 20px;
`;
export const PagenumberDiv = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f39926;
  border-radius: 5px;
`;
export const Footerdiv = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterBig = styled.span`
  margin: 5px;
  font-size: 13px;
`;
export const FooterSmall = styled.span`
  margin: 5px;
  font-size: 8px;
`;

export const PostReadDiv = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  line-height: 24px;
`;
export const ReplTitleDiv = styled.div`
  font-size: 12px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const PostReplDiv = styled.div`
  border-top: 2px solid white;
  margin-bottom: 15px;
  width: 100%;
  line-height: 24px;
`;
export const ReplWriter = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-weight: bolder;
`;
export const Repl = styled.span`
  font-size: 12px;
`;
export const WritereplDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ReplInput = styled.textarea`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  height: 30px;
  border-radius: 5px;
  font-family: "Noto Sans KR", sans-serif;
`;
export const ReplSubmitDiv = styled.div`
  width: 100px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: #f39926;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
export const CursorDiv = styled.div`
  cursor: pointer;
  margin-right: 17px;
`;

export const PostWriteDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const TitleInput = styled.input`
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
`;
export const ContentsInput = styled.textarea`
  margin-top: 10px;
  padding: 10px;
  height: 400px;
  border-radius: 5px;
  font-family: "Noto Sans KR", sans-serif;
`;
export const PostSubmitDiv = styled.div`
  width: 50%;
  margin: 0px auto;
  margin-top: 15px;
  border-radius: 10px;
  background-color: #f39926;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
export const PostSubmit = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: "Black Han Sans", sans-serif;
  font-size: 20px;
  color: white;
`;

export const TodoList = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 20px;
  color: white;
`;

export const CircleButton = styled.button`
  background-color: #38d9a9;
  cursor: pointer;
  width: 20px;
  height: 20px;
  align-items: center;
`;

export const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;
