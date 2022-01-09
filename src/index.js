module.exports = function toReadable (n) {
        const number = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen',
        'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        if(n==0){
            return 'zero';
        }
        if (n <= 20 ) {
          return `${number[n-1]}`;
        }
        else if (n > 20 && n < 100) {
          let mas = String(n).split('');
          if(mas[1] == 0) {
              return `${number[(+mas[0] + 17)]}`;
          }
          return `${number[(+mas[0] + 17)]} ${number[+mas[1]-1]}`;
        }
        else {
          let mas = String(n).split('');
          if (mas[1] == 0 && mas[2] == 0) {
            return `${number[(+mas[0] - 1)]} hundred`;
        }
          if (mas[1] == 0) {
            return `${number[(+mas[0] - 1)]} hundred ${number[(+mas[2] - 1)]}`;
        }
          if (mas[2] == 0) {
            if(mas[1] == 1){
                return `${number[(+mas[0] - 1)]} hundred ten`;
            }
            return `${number[(+mas[0] - 1)]} hundred ${number[+mas[1] + 17]}`;
        }
          if (+mas[1] < 2){
            return `${number[(+mas[0] - 1)]} hundred ${number[+mas[2] + 9]}`;
        }
          else {
            return `${number[(+mas[0] - 1)]} hundred ${number[+mas[1] + 17]} ${number[(+mas[2] - 1)]}`;
        }
    }
};
