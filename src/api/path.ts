import {ajax} from "./index";

/**
 * 获取路径记录
 * @param mediaId
 * @param recordStart
 * @param pageSize
 */
export function get_path(mediaId: number, recordStart: number, pageSize: number) {
    return ajax({
        url: 'php/path/get.php',
        data: {mediaId, recordStart, pageSize}
    })
}

/**
 * 扫描路径
 * @param mediaId
 * @param path
 * @param pathId
 */
export function rescan_path(mediaId: any, path: any, pathId: any) {
    return ajax({
        url: 'php/path/rescan.php',
        data: {mediaId, path, pathId}
    })
}

/**
 * 扫描路径
 * @param mediaId
 * @param path
 * @param pathId
 */
export function scan_path(mediaId: any, path: any, pathId: any){
    return ajax({
        url: 'php/path/scan.php',
        data: {mediaId, path, pathId}
    })
}

/**
 * 删除路径
 * @param pathId
 */
export function delete_path(pathId: any) {
    return ajax({
        url: 'php/path/delete.php',
        data: {pathId}
    })
}

/**
 * 新增路径
 * @param mediaId
 * @param path
 */
export function add_path(mediaId: any, path: any) {
    return ajax({
        url: 'php/path/add.php',
        data: {
            mediaId, path
        }
    })
}

/**
 * 删除媒体库
 * @param mediaId
 */
export function delete_media(mediaId: any) {
    return ajax({
        url: 'php/media/delete.php',
        data: {mediaId}
    })
}

