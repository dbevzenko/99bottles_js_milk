import { downTo } from './helpers';

export class Bottles {
  format(nBotl) {
    switch (nBotl) {
      case 1: return "1 bottle";
      case 0: return "no more bottles";
      case -1: return "99 bottles";
      default: return `${nBotl} bottles`;
    }
  }

  subVerse(nBotl, capitalize) {
    const v = `${this.format(nBotl)} of milk`;
    if (capitalize) {
      const fst = v.slice(0,1).toUpperCase();
      return fst + v.slice(1);
    } else {
      return v;
    }
  }

  prefix(nBotl) {
    switch (nBotl) {
      case 1: return "Take it down and pass it around, ";
      case 0: return "Go to the store and buy some more, ";
      default: return "Take one down and pass it around, ";
    }
  }

  verse(nBotl) {
    const fst = `${this.subVerse(nBotl, true)} on the wall, ${this.subVerse(nBotl)}.\n`;
    const prefix = this.prefix(nBotl);
    const snd = `${this.subVerse(nBotl-1)} on the wall.\n`;
    return fst + prefix + snd;
  }

  range(n1, n2){
    const d = n1 - n2 + 1;
    return Array(d).fill(n1).map((itm, idx) => itm - idx)
  }

  verses(n1, n2) {
    return this.range(n1, n2).map(n => this.verse(n)).join("\n");
  }

  song() {
    return this.verses(99,0);
  }
}
