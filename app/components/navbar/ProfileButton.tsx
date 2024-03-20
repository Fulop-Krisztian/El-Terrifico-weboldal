'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

/* Átírtam az Image src-t, adtam neki height, width, csak mert nem akart ezek miatt menni az oldal- Barni */

const ProfileButton = () => {
    const { data: session, status, update } = useSession()
    // Session update oldal betöltéskor
    useEffect(() => {
        update()
    }, [])

    if (status === "authenticated") {

        return (
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <Image alt="🌮" height={45} width={45} src={session.user?.image!} />
                    </div>
                </div>
                <ul tabIndex={0} className="gap-1 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li className='text-center font-semibold border-b border-b-transparent border-b-slate-800 py-2'>Heló, {session.user?.name}!</li>
                    <li>
                        <Link href="/products">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                            Ajánlataink
                            <span className="badge badge-success">Új</span>
                        </Link>
                    </li>

                    <li>
                        <Link href='/profile'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            Profil
                        </Link>
                    </li>

                    {/*Csak adminos bejelentkezéssel látszik */}
                    {session?.user?.role === 'admin' ?
                        <>
                            <li >
                                <Link href="/admin/orders">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                    Admin felület
                                </Link>
                            </li>
                            <li>
                                <a href="https://terrifico.zapto.org/jenkins">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="800"
                                        height="800"
                                        viewBox="0 0 32 32"
                                        strokeWidth="0.8"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path d="M17.426 1.895c-4.14.09-6.508 1.953-6.64 2.058-.106.035-2.84.973-3.395 3.418-.086.035-.11.031-.235.106-.25.164-.562.433-.816.867-.485.824-.688 2.238-.16 4.437-.735.567-1.133 1.453-1.14 2.39-.009 1.09.362 2.231 1.108 3.028.668.715 1.317 1.024 1.817 1.13.195.042.203.003.348 0 .09.468.43 1.823 1.16 3.23-.422.238-1.63.914-3.051 1.738-.8.465-1.59.93-2.188 1.297-.296.187-.543.347-.73.476a3.759 3.759 0 00-.238.18.78.78 0 00-.106.098c-.039.047-.117.074-.144.312l-.04.383L4.165 30h23.703l.11-.352s.273-.867.535-1.847a28.28 28.28 0 00.36-1.461c.093-.461.163-.832.144-1.172-.016-.195-.078-.266-.125-.34a2.035 2.035 0 00-.16-.203 5.678 5.678 0 00-.434-.426 27.17 27.17 0 00-1.207-1.015c-.7-.559-1.145-.887-1.39-1.075.21-.261.663-.734 1.241-2.199.707-1.781 1.336-4.488 1.075-8.195-.25-3.508-1.461-5.95-3.246-7.512-1.446-1.258-3.235-1.922-5.133-2.18v-.007c-.016 0-.028.004-.043 0a16.154 16.154 0 00-1.317-.118 15.542 15.542 0 00-.851-.003zm1.09 1.12c.32-.019.652-.015.996 0 1.742.239 3.34.84 4.601 1.946.692.605 1.29 1.371 1.766 2.316a2.633 2.633 0 00-1.07-.183c-.848.047-1.47.449-1.47.449l.536.848s.434-.27.984-.297c.54-.028 1.153.113 1.743 1.125.199.761.343 1.597.414 2.539-.032-.055-.055-.102-.094-.164a36.55 36.55 0 00-.406-.727c-.297-.508-.586-.996-.586-.996l-.86.508a115.677 115.677 0 00.977 1.695c.035.059.055.098.078.145-.043.023-.063.039-.156.058-.305.067-.813.059-1.301-.086l-.277.965c.64.184 1.27.211 1.785.098.262-.055.496-.137.703-.313a.953.953 0 00.18-.222c.093 3.074-.454 5.324-1.043 6.824-.653 1.648-1.328 2.367-1.328 2.367l-.375.41v.004c-.547.535-1.79 1.48-3.891 1.633-2.922.215-4.922-1.613-5.887-2.64-.922-.977-1.05-1.723-1.05-1.723l-.985.191s.23 1.074 1.309 2.219c.43.457 1.09 1.086 1.945 1.652-.063.004-.129-.004-.195.008-.391.066-.778.246-1.047.578-1.418-.082-2.414-.492-3.047-.902-.68-.445-.938-.828-.945-.84-.668-1.086-1.063-2.61-1.223-3.328.27-.137.605-.383.953-.809l-.777-.633c-.274.332-.5.485-.645.56l-.008.003-.25.078s-.097.043-.394-.02c-.297-.062-.75-.25-1.297-.835-.527-.563-.848-1.493-.84-2.332.008-.844.313-1.524.883-1.813l.016-.012c.675-.375 1.125-.425 1.43-.363.304.063.515.238.694.492.364.512.47 1.282.47 1.282l.07.62 2.027-.699-.05-.402s-.095-.691-.392-1.539c-.183-.512-.101-1.176.094-1.863.192-.688.477-1.367.594-1.989.125-.656-.035-1.125-.215-1.445.36-.726 2.274-4.176 6.856-4.437zm-4.375.395a10.226 10.226 0 00-3.192 3.277l-.136.016c-.926.086-1.727.234-2.329.363.696-1.48 2.672-2.191 2.672-2.191l.09-.031.07-.059s.985-.812 2.825-1.375zm2.312 3.91c-1.047.055-1.762.575-2.144 1.157-.516.777-.543 1.62-.543 1.62l.996.055s.043-.617.379-1.125c.336-.507.851-.949 2.238-.625l.23-.972a4.108 4.108 0 00-1.156-.11zm-5.805.422c.204.227.364.344.247.969-.082.437-.368 1.14-.582 1.91-.211.766-.364 1.629-.07 2.461.187.531.202.73.241.95l-.171.058c-.063-.344-.051-.645-.43-1.18-.285-.398-.719-.773-1.32-.894-.446-.09-.954-.032-1.524.191-.394-1.844-.14-2.84.164-3.355.164-.286.352-.442.488-.528a.736.736 0 01.192-.097h.008s1.367-.32 2.757-.485zm8 2.285l-.921.387s.68 1.61 1.128 2.402c-.03.02-.035.032-.14.055-.336.074-.977.04-1.703-.277l-.403.918c.891.386 1.7.472 2.317.336.308-.067.59-.18.793-.438.207-.258.226-.695.05-.984-.312-.52-1.12-2.399-1.12-2.399zm3.872.598l-1 .012s.027 2.379 1.933 4.105h-.004c.801.727 1.137 1.2 1.192 1.367.027.086.02.078.004.11a.848.848 0 01-.188.218c-.148.133-.734.426-1.367.618-.633.191-1.344.316-1.793.304-.168-.007-.192-.039-.219-.066-.031-.031-.062-.098-.078-.203-.031-.207.027-.473.027-.473l-.972-.246s-.114.402-.043.867c.035.235.12.504.332.735.215.23.554.375.926.386.64.016 1.402-.132 2.109-.347.707-.215 1.332-.457 1.746-.832.164-.149.328-.317.434-.555.105-.238.12-.547.035-.824-.18-.547-.633-1.035-1.473-1.801-1.57-1.422-1.601-3.375-1.601-3.375zm-14.832 3.29c-.32.019-.657.163-.961.413l.562.676c-.137.41-.273 1.012-.16 1.633l.984-.18c-.054-.297.028-.7.117-1.035.125.254.223.504.223.504l.965-.254s-.145-.61-.535-1.125c-.2-.258-.477-.524-.883-.61a1.047 1.047 0 00-.313-.023zm17.597 3.85c-.762.864-2.156.981-2.156.981l.058 1s1.743-.058 2.848-1.324zm-6.71.356l-.634.774c2.122 1.722 4.684.984 4.684.984l-.277-.957s-2.067.582-3.774-.8zm-.278 1.602l-.965.273c.195.695.68 1.192 1.23 1.5.547.309 1.168.453 1.754.531 1.172.153 2.235.008 2.235.008l-.13-.992s-.964.125-1.972-.008c-.508-.062-1.015-.195-1.402-.41-.383-.219-.637-.484-.75-.902zm6.816 3.199c.25.191.676.504 1.352 1.043.426.34.851.691 1.16.973a5.2 5.2 0 01.36.355l.019.02c-.004.128-.031.43-.113.82-.09.43-.22.933-.344 1.41-.211.77-.348 1.215-.422 1.457h-1.176l-.035-.285c-.043-.383-.25-.617-.46-.777.038-.075.089-.145.112-.22.106-.308.137-.632.137-.948.008-.637-.105-1.278-.148-1.63-.067-.574-.285-1.066-.653-1.402a1.693 1.693 0 00-.43-.27c.266-.198.485-.39.641-.546zm-15.23.55c.152.352.418.887 1.101 1.774.961 1.25 2.547 1.688 3.293 1.828.043.465.098.91.22 1.313.062.215.151.422.273.613H4.836l-.828-2.063c.027-.019.035-.027.066-.046.156-.11.399-.266.692-.442a84.42 84.42 0 012.156-1.285c1.375-.797 2.465-1.41 2.96-1.691zm13.812.876c.239-.047.39.004.535.136.145.13.286.38.332.774.047.406.145.996.141 1.508 0 .254-.031.484-.078.629-.05.148-.102.195-.156.222-.399.203-1.13.16-1.75.008a7.172 7.172 0 01-.727-.227c.059-.156.098-.324.098-.5 0-.445-.207-.84-.524-1.113.336-.265.704-.558 1.086-.828a9.8 9.8 0 01.664-.434c.196-.109.364-.171.38-.175zm-11.972.199a7.278 7.278 0 002.43.676 2.91 2.91 0 00.007.52c.012.085.016.167.024.257-.692-.184-1.797-.566-2.41-1.363-.044-.055-.012-.035-.051-.09zm4.402.094a4.18 4.18 0 011.453.41l1.856.969c-.188.246-.305.55-.305.878 0 .266.078.512.203.73-.656.376-1.926 1.028-2.973 1.106-.343.024-.507-.039-.62-.125-.11-.086-.208-.238-.286-.507-.16-.54-.18-1.457-.297-2.477-.05-.406.024-.617.11-.738.09-.121.222-.2.453-.235.117-.02.254-.023.406-.011zm5.012.218c-.157.121-.352.262-.477.36.047-.035-.129.039-.305.035a1.34 1.34 0 01-.261-.02l-.532-.277c.301.02.61.02.93-.004.23-.015.43-.058.645-.094zm-.528 1.563c.27 0 .48.207.48.476 0 .27-.21.477-.48.477a.472.472 0 01-.48-.477c0-.27.21-.476.48-.476zm.832 1.816c.157.07.446.203.989.34V29h-1.727l-.328-.648c.078.011.156.023.234.023.032 0 .059-.008.09-.008.16.051.313.086.434.051.187-.059.199-.102.308-.18zm3.23.371v.016s.24.102.25.203l.02.172H23.43v-.25c.41.031.836.004 1.242-.14zm-5.23.118l.141.273h-.672c.192-.094.375-.188.531-.273z"></path>
                                    </svg>
                                    Jenkins
                                </a>
                            </li>
                        </>
                        :
                        <></>}


                    <li>
                        <span onClick={() => { signOut() }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                            </svg>
                            Kijelentkezés
                        </span>
                    </li>


                    <li className='pt-1 border-t-2 border-base-300'>
                        <label className="flex cursor-pointer gap-2 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <input type="checkbox" value="luxury" className="toggle theme-controller" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            {/*<span className="badge badge-warning">Teszt</span>*/}
                        </label>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <Link href="/login" className='btn btn-large btn-ghost'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        </Link>
    )



}

export default ProfileButton