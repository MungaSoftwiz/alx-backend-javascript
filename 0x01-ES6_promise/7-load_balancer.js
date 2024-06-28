export default function loadBalance(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((val) => val);
}
