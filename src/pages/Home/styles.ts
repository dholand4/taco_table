import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.5s ease;
`;

export const FadeIn = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 30px;
  color: rgb(7, 93, 128);
`;

export const Controls = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: nowrap;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  font-size: 16px;
  border: 2px solid #d0d7de;
  border-radius: 12px;
  background-color: #ffffff;
  color: #333;

  &:focus {
    border-color: rgb(7, 113, 155);
    outline: none;
    box-shadow: 0 0 0 4px rgba(45, 137, 239, 0.15);
  }
`;

export const PortionContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 20%;
  align-items: center;
`;

export const PortionLabel = styled.label`
  font-weight: 600;
  font-size: 15px;
  color: #333;
`;

export const PortionInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  border: 2px solid #d0d7de;
  border-radius: 12px;
  background-color: #ffffff;
  color: #333;
  transition: border 0.3s ease;

  &:focus {
    border-color:rgb(7, 113, 155);
    outline: none;
    box-shadow: 0 0 0 4px rgba(45, 137, 239, 0.15);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 12px;
  background-color: #ffffff;
  color: #333;
`;

export const Thead = styled.thead`
  background-color: rgb(7, 113, 155);
  color: #ffffff;
`;

export const Th = styled.th`
  padding: 16px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  background-color:rgb(7, 113, 155);
  color: white;
  &:first-child {
    text-align: left;
    padding-left: 24px;
  }

  &:last-child {
    padding-right: 24px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  text-align: center;
  font-size: 15px;

  &:first-child {
    text-align: left;
    padding-left: 24px;
  }

  &:last-child {
    padding-right: 24px;
  }
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  transition: background 0.2s ease;

  &:hover {
    background-color: rgb(7, 113, 155);
    color: white;
  }
`;
