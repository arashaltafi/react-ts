import CryptoJS from "crypto-js";
import moment from 'moment';
import { customLog } from "./CustomConsole";

var CryptoJSAesJson = {
    stringify: (cipherParams: any) => {
        var j: any = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) };
        if (cipherParams.iv) j.iv = cipherParams.iv.toString();
        if (cipherParams.salt) j.s = cipherParams.salt.toString();
        return JSON.stringify(j);
    },
    parse: (jsonStr: any) => {
        var j = JSON.parse(jsonStr);
        var cipherParams = CryptoJS.lib.CipherParams.create({
            ciphertext: CryptoJS.enc.Base64.parse(j.ct),
        });
        if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv);
        if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s);
        return cipherParams;
    },
};

const hashThis2 = (text: any, encrypt: any) => {
    var keyHex: any = 's5hsYlNfVvhFYxP4aSrj02ntHX5xR1MH';
    if (encrypt) {
        var encrypted = CryptoJS.AES.encrypt(JSON.stringify(text), keyHex, {
            format: CryptoJSAesJson,
        }).toString();
        return encrypted;
    } else {
        var decrypted = JSON.parse(
            CryptoJS.AES.decrypt(text, keyHex, {
                format: CryptoJSAesJson,
            }).toString(CryptoJS.enc.Utf8)
        );
        return decrypted;
    }
}

const hashThis = (text: any, encrypt: any) => {
    try {
        var keyHex = 's5hsYlNfVvhFYxP4aSrj02ntHX5xR1MH';
        var ECBOptions = {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        };
        if (encrypt) {
            var encrypted: any = CryptoJS.AES.encrypt(text, keyHex, ECBOptions);
            encrypted = encrypted.toString();
            return encrypted;
        } else {
            var decrypted: any = CryptoJS.AES.decrypt(text, keyHex, ECBOptions);
            decrypted = decrypted.toString(CryptoJS.enc.Utf8);
            return decrypted;
        }
    } catch (e: any) {
        customLog("Exception@encrypt:", text, "Message:", e.message);
        return null;
    }
}

const objToString = (obj: any) => {
    let string = "";
    Object.keys(obj).map((key, index) => {
        string += key + "=" + obj[key] + "&";
    });
    string = string.slice(0, -1);
    return string;
}

const metersToPixelsAtMaxZoom = (meters: any, latitude: any) =>
    meters / 0.075 / Math.cos((latitude * Math.PI) / 180);

const getBase64Image = (img: any) => {
    var canvas: any = document.createElement("canvas");
    canvas.crossOrigin = "anonymous";
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

const removeUseless = (txt: any) => {
    let a = txt.replace("ساختمان", "");
    a = a.replace("-", " ");
    a = a.replace("اپلیکیشن", "");
    a = a.trim();
    return a;
}

const getBuildDate = (epoch: any) => {
    const buildDate = moment(epoch).format("DD-MM-YYY HH:MM");
    return buildDate;
};

const versionCompare = (v1: any, v2: any, options: any) => {
    var lexicographical = options && options.lexicographical,
        zeroExtend = options && options.zeroExtend,
        v1parts = v1.split("."),
        v2parts = v2.split(".");

    function isValidPart(x: any) {
        return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
    }

    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
        return NaN;
    }

    if (zeroExtend) {
        while (v1parts.length < v2parts.length) v1parts.push("0");
        while (v2parts.length < v1parts.length) v2parts.push("0");
    }

    if (!lexicographical) {
        v1parts = v1parts.map(Number);
        v2parts = v2parts.map(Number);
    }

    for (var i = 0; i < v1parts.length; ++i) {
        if (v2parts.length == i) {
            return 1;
        }

        if (v1parts[i] == v2parts[i]) {
            continue;
        } else if (v1parts[i] > v2parts[i]) {
            return 1;
        } else {
            return -1;
        }
    }

    if (v1parts.length != v2parts.length) {
        return -1;
    }

    return 0;
}

export default {
    hashThis,
    objToString,
    hashThis2,
    metersToPixelsAtMaxZoom,
    getBase64Image,
    removeUseless,
    getBuildDate,
    versionCompare,
};
