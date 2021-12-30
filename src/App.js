import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Game from "./Pages/TeddyBearGame";
import HomePage from "./Pages/HomePage";
import "./styles/myStyle.css";
import { UserContext } from "./context/userContext";
import InitialState from "./Utilities/initialState";

function App() {
  const [value, setValue] = useState(InitialState);

  // componentDidMount = () => {
  //   this.start();
  // };

  // start = async () => {
  //   const data = await Api.getItems();
  //   this.setState({
  //     data,
  //     dataToFilter: data,
  //     randomQuestionIndex: Math.floor(Math.random() * data.length),
  //     countRights: data.filter((item) => item.wasRight).length,
  //   });
  //   console.log(this.state);
  // };

  // handelNewCardClick = () => {
  //   this.setState({
  //     randomQuestionIndex: Math.floor(
  //       Math.random() * this.state.dataToFilter.length
  //     ),
  //     showQuestionOrAnswer: "question",
  //   });
  // };

  // handelRevealAnswerClick = () => {
  //   this.setState({
  //     showQuestionOrAnswer: "answer",
  //   });
  // };

  // handelRightClick = (item) => {
  //   const dataToFilter = this.state.dataToFilter.filter(
  //     (itemData) => itemData.id !== item.id
  //   );
  //   this.setState((prevState) => ({
  //     countRights: prevState.countRights + 1,
  //     dataToFilter,
  //     randomQuestionIndex: Math.floor(Math.random() * dataToFilter.length),
  //     showQuestionOrAnswer: "question",
  //   }));
  // };

  // handelReshuffleClick = async () => {
  //   this.setState(InitialState);
  //   this.start();
  // };

  // handleClickEditCard = (item) => {
  //   this.setState({ currentEdit: item });
  // };

  // handleChangeAdd = async (event) => {
  //   const { name, value, id } = event.target;
  //   this.setState((prevState) => ({
  //     [id]: { ...prevState[id], [name]: value },
  //   }));
  // };

  // handleSubmitAdd = async () => {
  //   await Api.addItem(this.state.addQuestion);
  //   this.handelReshuffleClick();
  //   this.setState({ addQuestion: {} });
  // };

  // handleClickDelete = async (Item) => {
  //   await Api.deleteItem(Item.id);
  //   await this.updateData();
  // };

  // handleClickEdit = async (item) => {
  //   await Api.editItem(item.id, this.state.currentEdit);
  //   await this.updateData();
  // };

  // updateData = async () => {
  //   const data = await Api.getItems();
  //   this.setState({ data });
  // };

  return (
    <>
      <BrowserRouter>
        <Header />
        <UserContext.Provider value={{ value, setValue }}>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/game" exact element={<Game />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
