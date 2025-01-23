import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons from react-icons
import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className={styles.pagination} >
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={styles.buttonLeft}
      >
        <FaArrowLeft /> 
      </button>
      <span >
        Page {currentPage} of {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages || currentPage > totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={styles.buttonRight}
      >
        <FaArrowRight /> 
      </button>
    </div>
  );
};

export default Pagination;