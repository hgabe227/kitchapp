export function nextFourteenDays() {
  return Array.from({ length: 14 }, (_, index) => {
    const date = new Date();

    date.setDate(date.getDate() + index);

    return date.toISOString().slice(0, 10);
  });
                                    }
