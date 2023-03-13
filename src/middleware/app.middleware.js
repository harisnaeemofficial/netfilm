import { STATUS } from "constants/status";
import { ApiError, responseError } from "utils/response";

const appMiddleware = async (req, res) => {
  const _0x2ea8c0 = _0x5297;
  (function (_0x291332, _0x4ba0ff) {
    const _0x127d98 = _0x5297,
      _0x38d320 = _0x291332();
    while (!![]) {
      try {
        const _0x361a33 =
          (-parseInt(_0x127d98(0x114)) / 0x1) * (parseInt(_0x127d98(0x10c)) / 0x2) +
          -parseInt(_0x127d98(0x11c)) / 0x3 +
          (parseInt(_0x127d98(0x111)) / 0x4) * (-parseInt(_0x127d98(0x110)) / 0x5) +
          (-parseInt(_0x127d98(0x11a)) / 0x6) * (parseInt(_0x127d98(0x116)) / 0x7) +
          (parseInt(_0x127d98(0x11d)) / 0x8) * (-parseInt(_0x127d98(0x10f)) / 0x9) +
          -parseInt(_0x127d98(0x117)) / 0xa +
          (-parseInt(_0x127d98(0x10d)) / 0xb) * (-parseInt(_0x127d98(0x115)) / 0xc);
        if (_0x361a33 === _0x4ba0ff) break;
        else _0x38d320["push"](_0x38d320["shift"]());
      } catch (_0x3c32b1) {
        _0x38d320["push"](_0x38d320["shift"]());
      }
    }
  })(_0x248e, 0x70a9f);
  const tokenapp = req[_0x2ea8c0(0x112)][_0x2ea8c0(0x119)];
  function _0x248e() {
    const _0x155997 = [
      "1852962jbJdsi",
      "tokenapp:\x20",
      "1004379vupzOq",
      "7024vvAYlX",
      "FORBIDDEN",
      "You\x20don\x27t\x20have\x20permission\x20to\x20access\x20API",
      "59362pPLPds",
      "1408jDtaMN",
      "log",
      "8667gKJsGY",
      "35wJWOZr",
      "379912WQQdWR",
      "headers",
      "env",
      "11WTJXYn",
      "365136bdSNoM",
      "14kmkoxo",
      "6440150YfTnhT",
      "NEXT_PUBLIC_APP",
      "tokenapp"
    ];
    _0x248e = function () {
      return _0x155997;
    };
    return _0x248e();
  }
  function _0x5297(_0x36b3ea, _0x56c464) {
    const _0x248e3e = _0x248e();
    return (
      (_0x5297 = function (_0x529703, _0x1397b4) {
        _0x529703 = _0x529703 - 0x10b;
        let _0x583ef8 = _0x248e3e[_0x529703];
        return _0x583ef8;
      }),
      _0x5297(_0x36b3ea, _0x56c464)
    );
  }
  if (tokenapp !== process[_0x2ea8c0(0x113)][_0x2ea8c0(0x118)]) {
    const error = new ApiError(STATUS[_0x2ea8c0(0x11e)], _0x2ea8c0(0x10b));
    return responseError(error, res);
  }
};

export default appMiddleware;
