import { useState, useCallback } from "react";

/**
 * 数値を扱うフック
 * : 数値に対しての責任を負う
 *
 * - number: 今の数値を扱う
 * - storedNumber: これまでに押してきた数値の合算を扱う。
 * - sumNumber: 合算値を扱う
 * - isNumberActived: 数値系ボタンがクリックされたかどうか
 * - isCalculated: 計算したかどうか
 * - calc: 計算処理
 */
export const useNumber = () => {
  const [number, setNumber] = useState("");
  const [storedNumber, setStoredNumber] = useState("");
  const [sumNumber, setSumNumber] = useState("");
  const [isNumberActived, setIsNumberActived] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);

  /**
   * 数値データを保存する処理
   */
  const set = useCallback(
    (value) => {
      setNumber(value);
      setIsNumberActived(true);
      // 演算子が押された後の最初の保存はnumberをそのまま保存する
      if (isCalculated) {
        setStoredNumber(value);
        setIsCalculated(false);
      } else {
        setStoredNumber(`${storedNumber}${value}`);
      }
    },
    [storedNumber, isCalculated]
  );

  /**
   * 計算処理
   * - 演算子がある場合は計算を行う
   * - ない場合は一時データをそのまま保存する
   */
  const calc = useCallback(
    (operator) => {
      if (!storedNumber) return;
      operator
        ? setSumNumber((value) => eval(`${value} ${operator} ${storedNumber}`))
        : setSumNumber(storedNumber);
      setStoredNumber("");
    },
    [storedNumber]
  );

  /**
   * 一時データをリセットする
   */
  const numberClear = () => {
    setStoredNumber("");
    setNumber("");
  };

  /**
   * 全ての数値、フラグをリセットする
   */
  const allClear = () => {
    setNumber("");
    setStoredNumber("");
    setSumNumber("");
    setIsNumberActived(false);
    setIsCalculated(false);
  };

  /**
   * 数値に0.01をかける
   */
  const percent = () => {
    if (sumNumber) {
      setSumNumber(`${sumNumber * 0.01}`);
    } else {
      setStoredNumber(`${storedNumber * 0.01}`);
    }
  };

  /**
   * 数値が0より大きければ-、-であれば+にする
   */
  const toggleNegative = () => {
    if (storedNumber) {
      if (storedNumber > 0) {
        setStoredNumber(`-${storedNumber}`);
      } else {
        const positiveStored = storedNumber.slice(1);
        setStoredNumber(positiveStored);
      }
    } else if (sumNumber > 0) {
      setSumNumber(`-${sumNumber}`);
    } else {
      const positiveSum = sumNumber.slice(1);
      setSumNumber(positiveSum);
    }
  };

  const setUnNumberFlg = useCallback(() => setIsNumberActived(false), []);
  const setCalculatedFlg = useCallback(() => setIsCalculated(true), []);

  return {
    number,
    storedNumber,
    sumNumber,
    isNumberActived,
    isCalculated,
    set,
    calc,
    setUnNumberFlg,
    setCalculatedFlg,
    allClear,
    numberClear,
    percent,
    toggleNegative,
    setStoredNumber,
    setSumNumber,
  };
};
