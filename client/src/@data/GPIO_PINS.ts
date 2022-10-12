import { PinLabel, PinLabels } from "types";

/** GPIO pins */
const GPIO_PINS: PinLabels = {
  1: {
    number: 1,
    name: "3.3 VDC",
    type: "Power",
    color: "orange",
  },
  2: {
    number: 2,
    name: "5.0 VDC",
    type: "Power",
    color: "red",
  },
  3: {
    number: 3,
    name: "GPIO 8",
    type: "SDA1 I2C",
    color: "turquoise",
  },
  4: {
    number: 4,
    name: "5.0 VDC",
    type: "Power",
    color: "red",
  },
  5: {
    number: 5,
    name: "GPIO 9",
    type: "SCL1 (I2C)",
    color: "turquoise",
  },
  6: {
    number: 6,
    name: "Ground",
    type: "Ground",
    color: "black",
  },
  7: {
    number: 7,
    name: "GPIO 7",
    type: "GPLCK0",
    color: "green",
  },
  8: {
    number: 8,
    name: "GPIO 15",
    type: "TxD (UART)",
    color: "purple",
  },
  9: {
    number: 9,
    name: "Ground",
    type: "Ground",
    color: "black",
  },
  10: {
    number: 10,
    name: "GPIO 16",
    type: "RxD (UART)",
    color: "purple",
  },
  11: {
    number: 11,
    name: "GPIO 0",
    type: "GPIO",
    color: "green",
  },
  12: {
    number: 12,
    name: "GPIO 1",
    type: "PCM_CLK/PWM0",
    color: "green",
  },
  13: {
    number: 13,
    name: "GPIO 2",
    type: "GPIO",
    color: "green",
  },
  14: {
    number: 14,
    name: "Ground",
    type: "Ground",
    color: "black",
  },
  15: {
    number: 15,
    name: "GPIO 3",
    type: "GPIO",
    color: "green",
  },
  16: {
    number: 16,
    name: "GPIO 4",
    type: "GPIO",
    color: "green",
  },
  17: {
    number: 17,
    name: "3.3 VDC",
    type: "Power",
    color: "orange",
  },
  18: {
    number: 18,
    name: "GPIO 5",
    type: "GPIO",
    color: "green",
  },
  19: {
    number: 19,
    name: "GPIO 12",
    type: "MOSI (SPI)",
    color: "pink",
  },
  20: {
    number: 20,
    name: "Ground",
    type: "Ground",
    color: "black",
  },
  21: {
    number: 21,
    name: "GPIO 13",
    type: "MISO (SPI)",
    color: "pink",
  },
  22: {
    number: 22,
    name: "GPIO 6",
    type: "GPIO",
    color: "green",
  },
  23: {
    number: 23,
    name: "GPIO 14",
    type: "SCLK (SPI)",
    color: "pink",
  },
  24: {
    number: 24,
    name: "GPIO 10",
    type: "CE0 (SPI)",
    color: "pink",
  },
  25: {
    number: 25,
    name: "Ground",
    type: "Ground",
    color: "black",
  },
  26: {
    number: 26,
    name: "GPIO 11",
    type: "CE1 (SPI)",
    color: "pink",
  },
  27: {
    number: 27,
    name: "SDA0",
    type: "I2C ID EEPROM",
    color: "yellow",
  },
  28: {
    number: 28,
    name: "SCL0",
    type: "I2C ID EEPROM",
    color: "yellow",
  },
  29: {
    number: 29,
    name: "GPIO 21",
    type: "GPCLK1",
    color: "green",
  },
  30: {
    number: 30,
    name: "Ground",
    type: "Ground",
    color: "black",
  },
  31: {
    number: 31,
    name: "GPIO 22",
    type: "GPCLK2",
    color: "green",
  },
  32: {
    number: 32,
    name: "GPIO 26",
    type: "PWM0",
    color: "green",
  },
  33: {
    number: 33,
    name: "GPIO 23",
    type: "PWM1",
    color: "green",
  },
  34: {
    number: 34,
    name: "Ground",
    type: "Ground",
    color: "black",
  },
  35: {
    number: 35,
    name: "GPIO 24",
    type: "PCM_FS/PWM1",
    color: "green",
  },
  36: {
    number: 36,
    name: "GPIO 27",
    type: "GPIO",
    color: "green",
  },
  37: {
    number: 37,
    name: "GPIO 25",
    type: "GPIO",
    color: "green",
  },
  38: {
    number: 38,
    name: "GPIO 28",
    type: "PCM_DIN",
    color: "green",
  },
  39: {
    number: 39,
    name: "Ground",
    type: "Ground",
    color: "black",
  },
  40: {
    number: 40,
    name: "GPIO 29",
    type: "PCM_DOUT",
    color: "green",
  },
};

export default GPIO_PINS;