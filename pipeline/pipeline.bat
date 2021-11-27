setlocal ENABLEDELAYEDEXPANSION

call rmdir wf3-cda1126-ci /s /q
call git clone https://github.com/xonatis-academy/wf3-cda1126-ci.git
cd wf3-cda1126-ci/project
call npm install
REM call npm run test
echo Tests are done.
if !errorlevel! EQU 0 (
    call npm run builsd
    if !errorlevel! EQU 0 (
        echo Build is done.
        echo Artifact in dist folder.
        call xcopy /e /k /h /i /y dist ..\..\server
        cd ..\..
        echo Deployment done.
    )
) else (
    echo Test failre: pipeline stopped.
)