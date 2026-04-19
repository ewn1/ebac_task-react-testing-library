import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";

describe("Teste para o componente Post", () => {
  test("Deve renderizar dois comentários corretamente", () => {
    render(<Post />);
    const commentInput = screen.getByTestId("comment-input");
    const commentButton = screen.getByTestId("comment-button");

    fireEvent.change(commentInput, {
      target: { value: "Primeiro comentário do teste" },
    });
    fireEvent.click(commentButton);

    fireEvent.change(commentInput, {
      target: { value: "Segundo comentário do teste" },
    });
    fireEvent.click(commentButton);

    const comments = screen.getAllByTestId("comment");
    expect(comments).toHaveLength(2);
    expect(comments[0].innerHTML).toContain("Primeiro comentário do teste");
    expect(comments[1].innerHTML).toContain("Segundo comentário do teste");
  });
});
