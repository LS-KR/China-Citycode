
interface CitCode {
    city: string;
    code: string;
}

interface Provinces {
    Province: string;
    citys: CitCode[];
}

type codes = Provinces[];

function getcodes() : codes {
    var e = new XMLHttpRequest();
    e.open('get', "https://raw.githubusercontent.com/LS-KR/China-Citycode/main/citycode.json");
    e.send();
    return JSON.parse(e.responseText) as codes;
}