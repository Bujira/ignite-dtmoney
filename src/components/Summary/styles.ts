import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--shape);

    &.not-total {
      background: var(--shape);
      color: var(--text-title);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
`
interface TotalSummaryProps {
  isPositive: boolean;
}

export const TotalSummary = styled.div<TotalSummaryProps>`
    background: ${(props) => props.isPositive
    ? '#33CC95'
    : '#E52E4D'};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      color: #FFFFFF;

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;

      color: #FFFFFF;
    }
`