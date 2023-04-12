import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content =
        isiTabel.replace("#NAMA#", value.biodata.nama)
            .replace("#NOHP#", value.biodata.phone_number)
            .replace("#LAB#", value.biodata.jabatan)
            .replace("#HASIL#", value.location)
            .replace("#JADWAK#", value.checkin)
            .replace("#PENELITI#", value.biodata.hari_kerja)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}