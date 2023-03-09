import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
function BoardPage() {
  const board = {
    columns: [
      {
        id: 1,
        title: "Todo",
        cards: [{ id: 1, title: "Design Changes" }],
      },
      { id: 2, title: "Working On ", cards: [] },
      { id: 3, title: "Bugs", cards: [] },
      { id: 4, title: "Quality Assurance", cards: [] },
    ],
  };

  const onNewCard = (draftCard) => ({
    id: new Date().getTime(),
    ...draftCard,
  });

  const onNewColumn = (draftColumn) => ({
    id: new Date().getTime(),
    ...draftColumn,
  });

  return (
    <div>
      <Board
        initialBoard={board}
        allowAddCard={{ on: "top" }}
        allowAddColumn={{ on: "right" }}
        allowRemoveCard
        allowRenameColumn
        onCardNew={console.log}
        onCardRemove={console.log}
        onColumnNew={console.log}
        onColumnRemove={console.log}
        onColumnRename={console.log}
        onNewCardConfirm={onNewCard}
        onNewColumnConfirm={onNewColumn}
      />
    </div>
  );
}

export default BoardPage;
