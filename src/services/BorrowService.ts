import { Copy } from "../models/Copy";
import { Reader } from "../models/Reader";

export class BorrowService {
  borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.isCopyAvailable()) {
      return false;
    }
    copy.setAvailable(false);
    reader.addBorrowedCopy(copy);
    return true;
  }

  returnBook(reader: Reader, copy: Copy): void {
    copy.setAvailable(true);
    reader.removeBorrowedCopy(copy);
  }
}
