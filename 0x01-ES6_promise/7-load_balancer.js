export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.any([USDownload, chinaDownload])
    .then((value) => value)
    .catch((reason) => { console.log(reason); });
}
