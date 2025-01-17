export default {
    sidebar: {
        mediaList: '媒体库',
        mangaList: '漫画列表',
        chapterList: '章节列表',
        history: '历史记录',
        bookmark: '书签',
        account: '账户管理',
        mediaManage: '媒体库管理',
        mangaManage: '漫画管理',
        pathManage: '路径管理',
        chapterManage: '章节管理',
        bookmarkManage: '书签管理',
        compressManage: '转换管理',
        wiki: '使用说明',
    },
    option: {
        option: '操作',
        add: '新增',
        delete: '删除',
        modify: '修改',
        remove: '移除',
        confirm: '确定',
        cancel: '取消',
        removeFirst: '移除首页',
        recoveryFirst: '恢复首页',
        direction: '切换阅读方向',
        ltr: '左 -> 右',
        rtl: '右 -> 左',
    },
    account: {
        add: '新增用户',
        modify: '修改用户',
        serial: '序号',
        id: '用户id',
        name: '用户名',
        pass: '密码',
        registerTime: '注册日期',
        option: '操作',
        power:'权限',
        nameLabel: '用户名:',
        passLabel: '密码:',
        namePlace: '请输入用户名',
        passPlace: '请输入新密码',
        passModifyPlace: '请输入新密码(留空则不修改)',
        confirmBoxTitle: '确认删除',
        confirmBoxText: '确认删除此用户?',
        formWarning: '用户名长3-20位,以字母开头',
        before: '上一章',
        next: '下一章',
        note:{
            name:'"用户名": 长3-20位,以字母开头',
            pass:'"密码": 留空为不修改',
        },
        form:{
            label:{
                editUser:'编辑用户',
                editMedia:'编辑媒体库',
            },
            title:{
                power: '权限',
                mediaPower: '媒体库阅读权限',
            }
        },
    },
    mediaManage: {
        add: '新增媒体库',
        modify: '修改媒体库',
        id: '媒体库id',
        name: '媒体库名称',
        createTime: '创建时间',
        path: '路径',
        form: {
            name: '媒体库名称:',
            type: '媒体库类型:',
            file: '文件类型:',
            browse: '默认浏览方式:',
            directory: '文件夹结构:',
            removeFirst: '剔除首页:',
            direction: '翻页方向:',
        },
        note: {
            name: '"媒体库名称": 必填,不能为空',
            type: '"媒体库类型": 会影响smanga对媒体库路径的扫描方式.目前分为普通漫画与单本漫画,单本漫画对于普通漫画会少一个"章节"的目录层级.',
            browse: '"默认浏览方式": 选择此媒体库里漫画的默认浏览方式.您还可以通过浏览界面的顶部功能菜单调整,但我们还是建议将不同类型的漫画放在不同的媒体库,以便于进行管理.',
            directory: '"文件夹结构": 此选项支持为路径多加一层目录,例如您希望通过年份来管理漫画 "example/2022/manga/chapter/..."',
            removeFirst: '"剔除首页": 在"双页模式"下,通过在阅读中暂时剔除首页,可对其偶数页码,使漫画左右两页合成一张整图,请熟悉漫画页码后更改此项.您也可以在浏览界面通过功能菜单来临时更改此项.',
            direction: '"翻页方向": 在"双页模式"下,更改第一与第二张图的展示顺序,使得漫画左右两页合成一张整图.您也可以在浏览界面通过功能菜单来临时更改此项.',
        },
        place: {
            name: '请输入媒体库名称',
            browse: '请选择默认浏览方式',
        },
        select: {
            mediaType0: '漫画(漫画 -> 章节 -> 图片)',
            mediaType1: '单本(漫画 -> 图片)',
            fileType0: '图片',
            browse0: '瀑布',
            browse1: '单页',
            browse2: '双页',
            directory0: '漫画 -> 章节(或压缩包) -> 图片',
            directory1: '目录 -> 漫画 -> 章节(或压缩包) -> 图片',
            ltr: '左到右',
            rtl: '右到左',
        },
        confirm: {
            title: '确认删除',
            text: '确认删除此媒体库?',
        },
        title:{
            read:'阅读选项',
        },
    },
    path: {
        id: '路径id',
        add: '新增路径',
        modify: '编辑路径',
        path: '路径',
        createTime: '创建时间',
        form: {
            add: '新增路径:',
            path: '路径:',
        },
        place: {
            add: '请输入路径',
        },
        button: {
            re: '重新扫描',
            update: '增量扫描',
        },
        warning: {
            name: '媒体库名称不能为空!',
        },
        confirm: {
            title: '确认删除',
            text: '确认删除此媒体库?',
            title1: '',
            text1: '确认删除此路径? 与之关联的漫画和章节都会被清除!',
            title2: '确认重新扫描',
            text2: '确认删除此路径? 将清除与之相关的漫画与章节并重新扫描添加!',
        }
    },
    mangaManage: {
        id: '媒体库id',
        name: '漫画名称',
        createTime: '创建时间',
        updateTime: '更新时间',
        modify: '编辑漫画',
        form: {
            name: '漫画名称:',
            browse: '浏览方式:',
            path: '漫画路径:',
            poster: '漫画封面:',
        },
        place: {
            name: '请输入媒体库名称',
            browse: '请选择浏览方式',
            path: '请输入路径',
            poster: '请输入漫画封面路径',
        },
        confirm: {
            title: '确认删除',
            text: '确认删除此漫画?',
            title1: '确认移除',
            text1: '确认移除此漫画?',
            title2: '确认移除',
            text2: '确认移除此漫画并删除源文件?',
        },
        warning: {
            name: '漫画名不能为空!',
            path: '漫画路径不能为空!'
        },

    },
    chapterManage: {
        id: '章节id',
        name: '章节名称',
        createTime: '创建时间',
        updateTime: '更新时间',
        modify: '编辑章节',
        form: {
            name: '章节名称:',
            path: '章节路径:',
            poster: '章节封面:',
        },
        place: {
            name: '请输入章节名称',
            path: '请输入章节路径',
            poster: '请输入章节封面路径'
        },
        warning: {
            name: '章节名称不能为空!',
            path: '章节路径不能为空!',
        },
        confirm: {
            title: '确认删除',
            text: '确认删除此章节?',
            title1: '确认移除',
            text1: '确认移除此章节?',
            title2: '确认移除',
            text2: '确认移除此章节并删除源文件?',
        },
    },
    bookmarkManage: {
        add: '添加书签',
        remove: '移除书签',
        id: "书签id",
        page: '页码',
        createTime: '添加日期',
        confirm: {
            title: '确认删除',
            text: '确认删除此书签?',
        },
    },
    compressManage: {
        id: '转换id',
        type: '转换类型',
        source: '源路径',
        path: '转换路径',
        num: '图片总数',
        createTime: '转换日期',
        confirm: {
            title: '确认删除',
            text: '确认删除此转换记录?',
        },
    },
    browse: {
        flow: '条漫模式',
        single: '单页模式',
        double: '双页模式',
    },
    page: {
        before: '上一章',
        next: '下一章',
        firstPage: '已经位于首页',
        lastPage: '已经位于尾页',
        lastChapter: '已经到了最后一章',
        firstChapter: '已经位于第一章',
    },
    theme: {
        grey: '灰色',
        white: '白色',
        black: '黑色',
        red: '红色',
        redLight: '浅红',
        orange: '橘色',
        gold: '金色',
        yellow: '黄色',
        greenLight: '青柠',
        green: '绿色',
        cyan: '青色',
        blueLight: '蓝色',
        blueDraw: '深蓝',
        purple: '酱紫',
        magenta: '洋红',
    },
    404: '404，您请求的文件不存在!',
}
