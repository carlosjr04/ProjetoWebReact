import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { useCarrinhoStore } from "../../../store/useCarrinhoStore";
import { games, type Jogo } from "../../../Utils/gameData";

interface CarrinhoProps {
  id: string;
  cover: string;
  title: string;
  price: number;
  desconto: number;
}

export default function CarrinhoCard(carrinho: CarrinhoProps) {
  const [estado, setEstado] = useState<"Para minha conta" | "Para presente">(
    "Para minha conta"
  );
  const jogos = useCarrinhoStore((state) => state.jogos);
  const removerJogo = useCarrinhoStore((state) => state.remover);
  const adicionarJogo = useCarrinhoStore((state) => state.adicionar);

  useEffect(() => {
    const quantidade = jogos.filter((jogo) => jogo.id === carrinho.id).length;
    if (quantidade > 1) {
      setEstado("Para presente");
    } else {
      setEstado("Para minha conta");
    }
  }, []);

  function calcularPrecoComDesconto(preco: number, desconto: number): string {
    if (preco == 0) {
      return "Gratuito";
    }
    const valorComDesconto = preco - (preco * desconto) / 100;
    return `R$${valorComDesconto.toFixed(2)}`;
  }

  

  function pegarJogoId(id: string): Jogo | undefined {
    const jogoEncontrado = games.find((jogo) => jogo.id == id);

    return jogoEncontrado;
  }

  return (
    <div className={style.container}>
      <img src={carrinho.cover} className={style.cover} />
      <div className={style.detalhe}>
        <div className={style.esquerda}>
          <div>
            <h1>{carrinho.title}</h1>
            <img src="/window_carrinho.png" alt="" />
          </div>
          <div className={`dropdown ${style.dropDown} `}>
            <a
              className={`dropdown-toggle ${style.dropDownLink} `}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {estado}
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="24"
              height="24"
              role="presentation"
            >
              <polygon
                fill="#189cff"
                points="50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49"
              />
            </svg>{" "}
            <ul className="dropdown-menu dropdown-menu-dark">
              {jogos.filter((jogo) => jogo.id === carrinho.id).length<=1?  <li>
                  <a
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => setEstado("Para minha conta")}
                  >
                    Para minha conta
                  </a>
                </li>:null}
              <li>
                <a
                  className="dropdown-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => setEstado("Para presente")}
                >
                  Para presente
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.direita}>
          <div className={style.preco}>
            {carrinho.desconto > 0 ? (
              <div className={style.desconto}>
                <p>{`${carrinho.desconto}%`}</p>
              </div>
            ) : null}

            <div>
              {carrinho.desconto > 0 ? (
                <p className={style.precoDesconto}>{`R$${carrinho.price.toFixed(
                  2
                )}`}</p>
              ) : null}
              <h1>
                {calcularPrecoComDesconto(carrinho.price, carrinho.desconto)}
              </h1>
            </div>
          </div>
          <div className={style.botoes}>
            <button
              className={style.botao}
              onClick={() => {
                if (pegarJogoId(carrinho.id)) {
                  adicionarJogo(pegarJogoId(carrinho.id));
                }
              }}
            >
              adicionar
            </button>
            <p className={style.botao}> | </p>
            <button
              className={style.botao}
              onClick={() => {
                if (pegarJogoId(carrinho.id)) {
                  removerJogo(carrinho.id);
                }
              }}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
