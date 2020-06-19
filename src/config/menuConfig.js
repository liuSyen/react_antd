export default [
    {
        title: '首页',
        key: '/admin/home'
    },
    {
        title: 'ui',
        key: '/admin/ui',
        children: [
            {
                title: 'button',
                key: '/admin/button'
            },
            // {
            //     title: 'button',
            //     key: '/admin/button'
            // },
            // {
            //     title: 'button',
            //     key: '/admin/button'
            // }
        ]
    },
    {
        title: '表单',
        key: '/admin/form',
        children: [
            {
                title: '基础表单',
                key: '/admin/base_form',
            }
        ]
    },
    {
        title: '表格',
        key: '/admin/table',
        children: [
            {
                title: '基础表格',
                key: '/admin/base_table',
            },
            {
                title: '高级表格',
                key: '/admin/senior_table',
            }
        ]
    }
]