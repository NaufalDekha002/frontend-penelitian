import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
    console.log(results);
}
function isiRow(value) {
    let content =
        isiTabel.replace("#NAMA#", value.biodata.nama)
            .replace("#PHONE NUMBER#", value.biodata.phone_number)
            .replace("#JABATAN#", value.biodata.jabatan)
            .replace("#JADWAL PENELITIAN#", value.biodata.jadwalpenelitian)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}