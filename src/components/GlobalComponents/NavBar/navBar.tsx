import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useCarrinhoStore } from "../../../store/useCarrinhoStore";

export default function NavBar() {
  const numJogos = useCarrinhoStore((state) => state.numJogos)
  return (
    <div>
      <nav className={`navbar navbar-dark mb-3 ${styles["main-nav"]}`}>
        <div className={styles.carrinho}>
          <Link className={styles.carrinhoLink} to="/carrinho">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              fill="#fff"
            >
              <path
                d="M33.63 8.05005L30.11 20.81C29.9416 21.453 29.5645 22.0219 29.0378 22.4273C28.5111 22.8328 27.8647 23.0518 27.2 23.05H14.75C14.1022 23.0507 13.4715 22.8416 12.9524 22.4541C12.4333 22.0665 12.0536 21.5213 11.87 20.9L7.56 8.05005H2V4.05005H8.28C8.90845 4.05122 9.52067 4.24973 10.0302 4.61755C10.5398 4.98538 10.921 5.50394 11.12 6.10005L11.78 8.10005L33.63 8.05005ZM15 27.05C14.5055 27.05 14.0222 27.1967 13.6111 27.4714C13.2 27.7461 12.8795 28.1365 12.6903 28.5933C12.5011 29.0502 12.4516 29.5528 12.548 30.0378C12.6445 30.5227 12.8826 30.9682 13.2322 31.3178C13.5819 31.6674 14.0273 31.9056 14.5123 32.002C14.9972 32.0985 15.4999 32.049 15.9567 31.8597C16.4135 31.6705 16.804 31.3501 17.0787 30.939C17.3534 30.5278 17.5 30.0445 17.5 29.55C17.5 28.887 17.2366 28.2511 16.7678 27.7823C16.2989 27.3134 15.663 27.05 15 27.05ZM27 27.05C26.5055 27.05 26.0222 27.1967 25.6111 27.4714C25.2 27.7461 24.8795 28.1365 24.6903 28.5933C24.5011 29.0502 24.4516 29.5528 24.548 30.0378C24.6445 30.5227 24.8826 30.9682 25.2322 31.3178C25.5819 31.6674 26.0273 31.9056 26.5123 32.002C26.9972 32.0985 27.4999 32.049 27.9567 31.8597C28.4135 31.6705 28.804 31.3501 29.0787 30.939C29.3534 30.5278 29.5 30.0445 29.5 29.55C29.5 28.887 29.2366 28.2511 28.7678 27.7823C28.2989 27.3134 27.663 27.05 27 27.05Z"
                fill="#fff"
              ></path>
            </svg>
            {`Carrinho(${numJogos})`}
          </Link>
        </div>
        <div
          style={{
            marginLeft: "0px",
            ["--bs-gutter-x" as any]: "0",
          }}
          className={`${styles["container"]} ${styles["container-nav-home"]}`}
        >
          <div
            className={`navbar-nav align-items-center ${styles["nav-home"]}`}
          >
            <a href="#" className="nav-link nav-item fs-6">
              Sua loja
            </a>
            <Link
              to="inConstrution"
              className="nav-link nav-item fs-6"
            >
              Novidades e tendências
            </Link>
            <Link
              to="inConstrution"
              className="nav-link nav-item fs-6"
            >
              Categorias
            </Link>
            <Link
              to="inConstrution"
              className="nav-link nav-item fs-6"
            >
              Loja de pontos
            </Link>
            <Link
              to="inConstrution"
              className="nav-link nav-item fs-6"
            >
              Notícias
            </Link>
            <Link
              to="inConstrution"
              className="nav-link nav-item fs-6"
            >
              Laboratório
            </Link>

            <div className={`d-flex ${styles["input-home"]}`}>
              <input
                type="search"
                className="form-control"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button
                className="btn btn-info"
                type="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/icons8-search-50.png"
                  alt="Buscar"
                  style={{ height: "16px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
